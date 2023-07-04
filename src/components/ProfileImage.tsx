import Image from "next/image";

type ProfileImageProps = {
  src?: string | null;
  className?: string;
};

export default function ProfileImage({
  src,
  className = "",
}: ProfileImageProps) {
  return (
    <>
      <div
        className={`relative mt-2 h-12  w-12 overflow-hidden rounded-full ${className}`}
      >
        {src && <Image src={src} alt="Profile Image" quality={100} fill />}
      </div>
    </>
  );
}