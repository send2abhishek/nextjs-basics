import fs from "fs/promises";
import path from "path";

const HomePage = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}

export default HomePage;
