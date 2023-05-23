import Link from "next/link";

function Backdown() {
  return ( //ปุ่มกดกลับ
    <div className="w-6 button1">
      <Link href="/">
        <img src="/img/back-down.svg" />
      </Link>
    </div>
  );
}

export default Backdown;
