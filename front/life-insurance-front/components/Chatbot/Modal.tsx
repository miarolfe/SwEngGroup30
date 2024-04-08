import * as Dialog from "@radix-ui/react-dialog";
import { type ReturnType } from "./ParseResponse";
import Table from "./Table";
import { useEffect, useMemo } from "react";

const Modal = ({
  children,
  tableItems,
}: {
  children: React.ReactNode;
  tableItems?: ReturnType;
}) => {
  const t = useMemo(() => {
    if (!tableItems) return null;
    const res = [];
    for (var key in tableItems) {
      if (
        tableItems.hasOwnProperty(key) &&
        tableItems[key as keyof ReturnType].length > 0
      ) {
        res.push(
          <div key={key + "modal"}>
            <div className="text-xl font-semibold mb-1" key={key + "1"}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </div>
            <Table
              key={key + "2"}
              tableVals={tableItems[key as keyof ReturnType]}
            />
          </div>
        );
      }
    }

    return res;
  }, [tableItems]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-30 inset-0 fixed glass-slate" />
        <Dialog.Content className="z-40 h-fit w-3/4 p-2 rounded-md glass text-white translate-x-[18%] -translate-y-1/2 top-1/2 bottom-1/2 fixed">
          <Dialog.Title className="text-3xl font-bold">
            Detailed Response
          </Dialog.Title>
          <Dialog.Description className="mb-2">
            Here's a tabular view of the data sent back by the chatbot
          </Dialog.Description>
          {t}
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
