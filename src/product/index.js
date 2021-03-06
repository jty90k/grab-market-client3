import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage() {
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

  if (product === null) {
    return <h1>상품정보를 받고 있습니다....</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
// Cannot read property 'imageUrl' of null이 뜨는 경우는 null에 있는 imageUrl을 읽을 수가 없는 경우이다. 왜냐하면
// useState(null) = proudct(img src="image/icons/avatar.png")이다.
// product가 초기에는 null값이다.
// 우리가 예상하기에는 product가 네트워크 통신했을 때 product는 결과적으로 객체안에 imageUrl이 있었다. 그런데
// ./product/index.js에서 axios는 비동기 통신이다. 그렇기 때문에 처음에 const [product, setProduct] 중 product는 null값이 들어간체로 네트워크 통신이 실행이 된다.
// 그다음에 결과를 받기 전에 바로 rendering이 되면 return이 실행이 될 때 product.imageUrl에서 product의 초기값은 null 이기 때문에 null.imageUrl이기 때문에 오류가 생긴다.
// product값에 정산값이 들어 가면 아무 문제가 없지만 그렇지 않은 경우 방어코드를 만들어야 한다.
// if문을 작성한다.
