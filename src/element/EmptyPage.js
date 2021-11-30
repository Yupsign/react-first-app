import { Link } from "react-router-dom";

export default function EmptyPage() {
  const a = 5;
  console.log(a);
  
  return (
    <>
      
      <h2>잘못된 만남입니다.</h2>
      <Link to="/">돌아가기</Link>
    </>
  );
}
