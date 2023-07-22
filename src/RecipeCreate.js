import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
const initialFormState={
  name: '',
  cuisine: '',
  photo: '',
  ingredients:'', 
  preparation: '',
}
const [formData, setFormData]= useState({...initialFormState})
const handleChange=({target})=>{
setFormData({
  ...formData,
  [target.name]: target.value,
})
}
const handleSubmit=(event)=>{
  event.preventDefault()
  createRecipe({...formData})
  setFormData({...initialFormState})
}
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
           <td><input id="name" type="text" name="name" required={true} onChange={handleChange} value={formData.name} placeholder='Name'/></td>
          <td><input id="cuisine" type="text" name="cuisine" required={true} onChange={handleChange} value={formData.cuisine} placeholder='Cuisine'/></td>
          <td><input id='photo' type='url' name='photo' required={true} onChange={handleChange} value={formData.photo} placeholder='Photo'/></td>
          <td><textarea id='ingredients' name='ingredients' type='text' required={true} onChange={handleChange} value={formData.ingredients} placeholder='Ingredients'/></td>
          <td><textarea id='preparation' name='preparation' type='text' required={true} onChange={handleChange} value={formData.preparation} placeholder='Preparation'/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
