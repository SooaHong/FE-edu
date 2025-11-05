type AlertBoxProps = {
  text: string;
};

function AlertBox({text}: AlertBoxProps) {
  return (
    <div className="mb-4 flex w-full items-center gap-x-3 rounded-lg bg-gray-100 p-3">
      <img src="/exclamation-mark.png" alt="경고 아이콘" className="h-6 w-6" />
      <p className="text-sm text-gray-700">화면 캡처를 감지했어요.</p>
    </div>
  );
}

export default AlertBox;