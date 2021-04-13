import { useRouter } from "next/router";

const ProjectId = () => {
  const router = useRouter();
  console.log("path name", router.pathname);
  console.log("path value", router.query);
  return <div>the project id page</div>;
};

export default ProjectId;
