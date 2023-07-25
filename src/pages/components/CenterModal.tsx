"use client";
import { useState } from "react";

interface CenterModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactElement;
  variant?: any;
}

const CenterModal: React.FC<CenterModalProps> = ({
  isOpen,
  onClose,
  children,
  variant = "small",
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="backdrop flex justify-center">
        <div
          className="backdrop"
          style={{
            zIndex: -1,
            background: "rgba(0,0,0,0.3)",
          }}
          onClick={onClose}
        ></div>
        <Backdrop click={onClose} />
        <div className="flex items-center justify-center z-50 ">
          <div
            className={`${
              variant === `small` ? `w-[800px] h-[500px]` : `w-[660px]`
            } bg-white rounded-[6px] shadow  modal-content`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

const Backdrop = (props: any) => (
  <div onClick={props.click} className="backdrop cursor-pointer">
    <style>{`
      .backdrop {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.01);
        z-index: 40;
      }
    `}</style>
  </div>
);

export default CenterModal;
