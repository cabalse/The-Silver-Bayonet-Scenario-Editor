const DialogLayout = ({ children }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-11 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div
        className="fixed inset-0 z-11 w-screen overflow-y-auto"
        onClick={() => console.log("Dialog Layout clicked")}
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogLayout;
