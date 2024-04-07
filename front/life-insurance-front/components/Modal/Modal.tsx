import * as Dialog from "@radix-ui/react-dialog";

const Modal = ({
  title,
  description,
  triggerEl,
  children,
}: {
  title?: string;
  description?: string;
  triggerEl: string;
  children: React.ReactNode;
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{triggerEl}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-10 inset-0 fixed glass-slate" />
        <Dialog.Content className="z-20 h-fit w-3/4 p-2 rounded-md glass text-white translate-x-[18%] -translate-y-1/2 top-1/2 bottom-1/2 fixed">
          {!!title && (
            <Dialog.Title className="text-3xl font-bold">{title}</Dialog.Title>
          )}
          {!!description && (
            <Dialog.Description className="mb-2">
              {description}
            </Dialog.Description>
          )}
          {children}
          <Dialog.Close asChild className="w-full flex justify-end">
            <button
              className="transition-all w-full h-8 bg-red-600 flex justify-center px-4 mt-2 border-red-700 border-[1px] rounded-full items-center text-white hover:bg-red-400"
              aria-label="Close"
            >
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
