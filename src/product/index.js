import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
  // 상품에 맞는 해당 id에 네트워크 요청을 해야 한다 그래서 axios를 추가한다.
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://341cf269-c712-4751-a587-2c7fd1b972ec.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProduct(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(product);
  return <h1>상품 상세 페이지 {id} 상품</h1>;
}

export default ProductPage;
