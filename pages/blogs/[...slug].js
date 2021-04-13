import { useRouter } from "next/router";

const ParticularBlogs = () => {
  const route = useRouter();
  console.log("all routes", route.query);

  return <div>selected blogs</div>;
};

export default ParticularBlogs;
