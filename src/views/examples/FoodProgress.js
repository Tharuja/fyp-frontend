import React from "react";

const FoodProgress = ({ data }) => {
  let meal =20 , tea =20 , drink = 20
  data.map((data, index) => {
    if (data.food_type === "meal")
      meal++
    if (data.food_type === "drink")
      drink++
    if (data.food_type === "tea")
      tea++
  }
  );
  return (
    <div>
      <div class="progress-wrapper">
        <div class="progress-info">
          <div class="progress-label">
            <span>Ordered Meal</span>
          </div>
          <div class="progress-percentage">
            <span>{((meal *100) / (meal+drink+tea)).toFixed(1)}%</span>
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: ((meal *100) / (meal+drink+tea)).toFixed(1) + '%' }}></div>
        </div>
      </div>

      <div class="progress-wrapper">
        <div class="progress-info">
          <div class="progress-label">
            <span>Ordered Tea</span>
          </div>
          <div class="progress-percentage">
          <span>{((tea *100) / (meal+drink+tea)).toFixed(1)}%</span>
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: ((tea *100) / (meal+drink+tea)).toFixed(1) + '%' }}></div>
        </div>
      </div>

      <div class="progress-wrapper">
        <div class="progress-info">
          <div class="progress-label">
            <span>Ordered Drink</span>
          </div>
          <div class="progress-percentage">
          <span>{((drink *100) / (meal+drink+tea)).toFixed(1)}%</span>
          </div>
        </div>
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: ((drink *100) / (meal+drink+tea)).toFixed(1) + '%' }}></div>
        </div>
      </div>


    </div>
  );
};

export default FoodProgress;
