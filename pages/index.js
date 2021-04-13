import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div>Home</div>
      <div>
        <ul>
          <li>
            <Link href="/clients">Home</Link>
          </li>
          <li>
            <Link href="/blogs">blogs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
