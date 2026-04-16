import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabase';

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 50 * 1024 * 1024) {
      setFileUploadError(true);
      return;
    }

    setFileUploadError(false);
    setUploading(true);

    try {
      const fileName = `avatars/${currentUser._id}-${Date.now()}`;

      // Upload to Supabase Storage
      const { error } = await supabase.storage
        .from('mern_real_estate')   
        .upload(fileName, file, { upsert: true });

      if (error) {
        console.log(error);
        setFileUploadError(true);
        setUploading(false);
        return;
      }

      // Get public URL
      const { data } = supabase.storage
        .from('mern_real_estate')
        .getPublicUrl(fileName);

      setAvatar(data.publicUrl);  
      setUploading(false);

    } catch (err) {
      console.log(err);
      setFileUploadError(true);
      setUploading(false);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>

      <form className='flex flex-col gap-4'>
        {/* Hidden File Input */}
        <input
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
          onChange={handleFileChange}  
        />

        {/* Profile Image */}
        <img
          onClick={() => fileRef.current.click()}
          src={avatar}              
          alt='profile'
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />

        {/* Upload Status Messages */}
        <p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700'>Error: Image must be less than 2MB</span>
          ) : uploading ? (
            <span className='text-slate-700'>Uploading...</span>
          ) : avatar !== currentUser.avatar ? (
            <span className='text-green-700'>Image uploaded successfully!</span>
          ) : ''}
        </p>

        <input
          type='text'
          placeholder='username'
          defaultValue={currentUser.username}
          id='username'
          className='border p-3 rounded-lg'
        />
        <input
          type='email'
          placeholder='email'
          id='email'
          defaultValue={currentUser.email}
          className='border p-3 rounded-lg'
        />
        <input
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
        />

        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>
          Update
        </button>

        <Link
          className='bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95'
          to={'/create-listing'}
        >
          Create Listing
        </Link>
      </form>

      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
}