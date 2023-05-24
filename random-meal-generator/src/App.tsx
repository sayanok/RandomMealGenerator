import axios from "axios";
import React, { useState } from "react";
import { MealType } from "./utils/types";

const App: React.FC = () => {
  const [meal, setMeal] = useState<MealType>();

  function getAndSetMeal() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => setMeal(response.data.meals[0]))
      .catch((error) => console.log(error));
  }

  return meal ? (
    <>
      <button onClick={() => getAndSetMeal()}>晩ごはん何にしようね</button>
      <h3>レシピ名:{meal.strMeal}</h3>
      <p>材料</p>
      {meal.strIngredient1 !== "" ? (
        <>
          {meal.strIngredient1}: {meal.strMeasure1}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient2 !== "" ? (
        <>
          {meal.strIngredient2}: {meal.strMeasure2}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient3 !== "" ? (
        <>
          {meal.strIngredient3}: {meal.strMeasure3}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient4 !== "" ? (
        <>
          {meal.strIngredient4}: {meal.strMeasure4}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient5 !== "" ? (
        <>
          {meal.strIngredient5}: {meal.strMeasure5}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient6 !== "" ? (
        <>
          {meal.strIngredient6}: {meal.strMeasure6}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient7 !== "" ? (
        <>
          {meal.strIngredient7}: {meal.strMeasure7}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient8 !== "" ? (
        <>
          {meal.strIngredient8}: {meal.strMeasure8}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient9 !== "" ? (
        <>
          {meal.strIngredient9}: {meal.strMeasure9}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient10 !== "" ? (
        <>
          {meal.strIngredient10}: {meal.strMeasure10}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient11 !== "" ? (
        <>
          {meal.strIngredient11}: {meal.strMeasure11}
          <br />
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient12 !== "" ? (
        <>
          {meal.strIngredient12}: {meal.strMeasure12}
          <br />{" "}
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient13 !== "" ? (
        <>
          {meal.strIngredient13}: {meal.strMeasure13}
          <br />{" "}
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient14 !== "" ? (
        <>
          {meal.strIngredient14}: {meal.strMeasure14}
          <br />{" "}
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient15 !== "" ? (
        <>
          {meal.strIngredient15}: {meal.strMeasure15}
          <br />{" "}
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient16 !== "" ? (
        <>
          {meal.strIngredient16}: {meal.strMeasure16}
          <br />{" "}
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient17 !== "" ? (
        <>
          {meal.strIngredient17}: {meal.strMeasure17}
          <br />{" "}
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient18 !== "" ? (
        <>
          {meal.strIngredient18}: {meal.strMeasure18}
          <br />{" "}
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient19 !== "" ? (
        <>
          {meal.strIngredient19}: {meal.strMeasure19}
          <br />{" "}
        </>
      ) : (
        <></>
      )}
      {meal.strIngredient20 !== "" ? (
        <>
          {meal.strIngredient20}: {meal.strMeasure20}
          <br />{" "}
        </>
      ) : (
        <></>
      )}

      <p>作り方</p>
      {meal.strInstructions}
      <p>写真</p>
      <img src={meal.strMealThumb} />
    </>
  ) : (
    <>
      <button onClick={() => getAndSetMeal()}>晩ごはん何にしようね</button>
      <p>ボタンをクリックしてください</p>
    </>
  );
};

export default App;
