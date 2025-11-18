import toast from 'react-hot-toast';
import { Api } from '../utils';

const handleContactDelete = (contactId, token, refetch) => {
  toast((t) => (
    <span className='flex flex-col gap-2 text-sm'>
      Are you sure you want to delete this contact request?
      <div className='flex justify-end gap-2 mt-1'>
        <button className='px-3 cursor-pointer py-1 text-[#fff] bg-red-600 rounded-md hover:bg-red-700'
            onClick={async() => {
            toast.dismiss(t.id);

            const toastId = toast.loading('Deleting contact request...', {
              duration: Infinity
            });

            try {
              const res = Api.delete(`/contactUs/${contactId}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });

              toast.dismiss(toastId);
              toast.success('contact request deleted succssfully!', {
                duration: 3000,
              });

              if (refetch) {
                await refetch();
              }
            } catch (error) {
              toast.error(error.message || 'Failed to delete contact request!');
            }
          }}
          >
          Yes
        </button>
        <button
         className='px-3 py-1 cursor-pointer bg-gary-300 rounded-md bg-gray-300 hover:bg-gray-400'
         onClick={() => toast.dismiss(t.id)}
         >
          Cancel
         </button>
      </div>
    </span>
  ));
};

export default handleContactDelete