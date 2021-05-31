import fs from "fs/promises";
import path from "path";

const FilterProduct = (props) => {
  return <div>{props.product.desc}</div>;
};

export async function getStaticProps(context) {
  const { params } = context;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  const selectedProduct = data.products.find(
    (product) => product.id === parseInt(params.pid)
  );

  return {
    props: {
      product: selectedProduct,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "1" } },
      { params: { pid: "2" } },
      { params: { pid: "3" } },
    ],
    fallback: false,
  };
}

export default FilterProduct;
