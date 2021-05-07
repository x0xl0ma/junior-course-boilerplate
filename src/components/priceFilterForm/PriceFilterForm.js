import React from 'react';
import Button from '../button/Button';
import LogRenderer from '../logRenderer/LogRenderer';
import PriceInput from '../priceInput/PriceInput';

import './priceFilterForm.css';

class PriceForm extends LogRenderer {
  render() {
    const { inputHandler, priceMin, priceMax, buttonHandler } = this.props;
    return (
      <form className="priceForm" onSubmit={buttonHandler}>
        <h3 className="priceFormTitle">Цена</h3>

        <div className="priceInputWrapper">
          <PriceInput
            label="от"
            inputName="priceMin"
            inputHandler={inputHandler}
            inputValue={priceMin}
          />

          <PriceInput
            label="до"
            inputName="priceMax"
            inputHandler={inputHandler}
            inputValue={priceMax}
            additionalClasses="priceFormInput"
          />
        </div>

        <Button text="Применить" />
      </form>
    );
  }
}

// const PriceForm = ({ inputHandler, priceMin, priceMax, buttonHandler }) => {
//   return (
//     <form>
//       <h3 className="priceFormTitle">Цена</h3>

//       <div className="priceInputWrapper">
//         <PriceInput
//           label="от"
//           inputName="priceMin"
//           inputHandler={inputHandler}
//           inputValue={priceMin}
//         />

//         <PriceInput
//           label="до"
//           inputName="priceMax"
//           inputHandler={inputHandler}
//           inputValue={priceMax}
//           additionalClasses="priceFormInput"
//         />
//       </div>

//       <Button text="Применить" onClickHandler={buttonHandler} />
//     </form>
//   );
// };

export default PriceForm;
