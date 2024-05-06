"use client";

import { useEffect, useState } from "react";
import IconButton from "../UIElements/Buttons/IconButton";
import { IoMdClose } from "react-icons/io";
import Button from "../UIElements/Buttons/Button";

interface ModelProps {
  // ? means its optional
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModelProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  // states
  const [showModal, setShowModal] = useState(isOpen);

  // --------- inner functions ---------

  // fn to close modal
  const handleClose = () => {
    if (disabled) return;

    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  // fn to submit modal
  const handleSubmit = () => {
    if (disabled) return;

    onSubmit();
  };

  // fn to handle seconday actions
  const handleSecondaryAction = () => {
    if (disabled || !secondaryAction) return;

    secondaryAction();
  };

  // -----------------------------------

  // useEffects
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // show nothing when modal is not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 ">
      {/* dialog alignment */}
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto lg:h-auto ">
        {/* actual dialog */}
        <div
          className={`translate duration-300 h-full 
          ${showModal ? "translate-y-0" : "translate-y-full"}
          ${showModal ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="relative translate h-full md:h-auto lg:h-auto border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* header */}
            <header className="flex items-center p-6 rounded-t relative justify-center border-b-[1px]">
              {/* close icon */}
              <IconButton
                className="bg-white absolute left-9"
                onClick={handleClose}
              >
                <IoMdClose size={18} />
              </IconButton>

              {/* label */}
              <p className="text-lg font-semibold">{title}</p>
            </header>

            {/* content */}
            <main className="relative p-6 flex-auto">{body}</main>

            {/* footer */}
            <footer className="flex flex-col gap-2 p-6">
              <div className="flex items-center gap-4 w-full">
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    label={secondaryActionLabel}
                    onClick={handleSubmit}
                    disabled={disabled}
                  />
                )}

                <Button
                  label={actionLabel}
                  onClick={handleSubmit}
                  disabled={disabled}
                />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
