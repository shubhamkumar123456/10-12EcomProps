import React from 'react'

const Cart = (props) => {
  console.log(props.cartArr)

  let sum = 0;
  props.cartArr.forEach((item)=>{
    sum= sum+item.price
  })

  const handleDelete = (ans, i)=>{
    console.log(ans)
    console.log(i)
    let copyArr = [...props.cartArr];
      copyArr.splice(i,1)
    props.setcartArr(copyArr)
  }

  const handleIncrement = (ans,i)=>{
      console.log(ans)
      let updatedObj = {
        ...ans,
        price:ans.price+(ans.price/ans.quantity),
        quantity:ans.quantity+1

        // price:
      }
      console.log(updatedObj)
      let copyArr = [...props.cartArr]
      copyArr[i] = updatedObj
      props.setcartArr(copyArr)


      // let copyArr = [...props.cartArr];


      console.log(i)
  }

  const handleDecrement = (ans, i)=>{
    console.log(ans)
    let updatedObj = {
      ...ans,
      price:ans.price-(ans.price/ans.quantity),
      quantity:ans.quantity-1

      // price:
    }
    console.log(updatedObj)
    if(updatedObj.price < 1){
     return 
   
    }
    let copyArr = [...props.cartArr]
    copyArr[i] = updatedObj
    props.setcartArr(copyArr)


    // let copyArr = [...props.cartArr];


    console.log(i)
  }

  return (
    <div>
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
  
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Quantity
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="sr-only"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      {
        props.cartArr.map((obj,i)=>{
          return  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img height={'80px'} width={'80px'} src={obj.thumbnail} alt="" />
          </th>
          <td className="px-6 py-4">
            {obj.title}
          </td>
          <td className="px-6 py-4">
            {obj.price.toFixed(2)}
          </td>
          <td className="px-6 py-4">
           <button onClick={()=>handleIncrement(obj,i)} className='bg-green-300 p-1 text-lg text-black' type='button'>+</button> {obj.quantity} <button onClick={()=>handleDecrement(obj,i)} className='bg-green-300 p-1 text-black text-lg'>-</button>
          </td>
          <td className="px-6 py-4 text-right">
            <button type='button' onClick={()=>handleDelete(obj,i)}  className="font-medium text-white rounded-md bg-red-500 p-2">Delete</button>
          </td>
        </tr>
        })
      }
     
    </tbody>
  </table>
  <h1 className='text-center my-4 text-2xl'>Total =$ {sum.toFixed(2)}</h1>
</div>


    </div>
  )
}

export default Cart
