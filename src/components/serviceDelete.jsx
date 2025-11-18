import toast from 'react-hot-toast';
import { Api } from '../utils';


const handleServiceDelete = (serviceId, token, refetch) => {
  toast((t) => (
    <span className='flex flex-col gap-2 text-sm'>
      Are you sure you want to delete this service request?
      <div className='flex justify-end gap-2 mt-1'>
        <button className='px-3 cursor-pointer py-1 text-[#fff] bg-red-600 rounded-md hover:bg-red-700'
            onClick={async() => {
            toast.dismiss(t.id);

            const toastId = toast.loading('Deleting service request...', {
              duration: Infinity
            });

            try {
              const res = await Api.delete(`/serviceRequest/${serviceId}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });

              toast.dismiss(toastId);
              toast.success('Service request deleted succssfully!', {
                duration: 3000,
              });

              if (refetch) {
                await refetch();
              }
            } catch (error) {
              toast.error(error.message || 'Failed to delete service request!');
            }
          }}
          >
          Yes
        </button>
        <button
         className='px-3 py-1 cursor-pointer bg-gary-300 rounded-md hover:bg-gary-400'
         onClick={() => toast.dismiss(t.id)}
         >
          Cancel
         </button>
      </div>
    </span>
  ));
};

export default handleServiceDelete