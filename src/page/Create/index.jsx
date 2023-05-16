import React from 'react'
import { useState } from 'react'
import './Create.css'
import axios from 'axios'
import UI from '../UI'
function Create() {
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!image) { alert('Need to enter correct image'); return }
    if (!title) { alert('Need to enter correct title'); return }
    if (!price) { alert('Need to enter correct price'); return }
    if (!date) { alert('Need to enter correct date'); return }
    if (!description) { alert('Need to enter correct description'); return }
    console.log(title, image, price, date, description)

    const formData = new FormData();
    formData.append('title', title)
    formData.append('price', price)
    formData.append('date', date)
    formData.append('image', image)
    formData.append('description', description)
    axios.post('http://localhost:8000/v1/nft', formData)
      .then(response => {
        console.log('NFT created successfully:', response.data);

      })
      .catch(error => {
        console.error('Error creating NFT:', error);

      });

    setImage(null)
    setTitle('')
    setPrice('')
    setDate('')
    setDescription('')
  }
  return (
    <div>
      <UI title="Create NFT" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className='text-white mt-3 ms-5'>Preview NFT</div>
            <div className="wrapper nft-item create-item">
              <div>
                <img className="img-nft my-4" src="https://html.dreamitsolution.net/nftpro/assets/images/resource/5.gif" alt="err" />
              </div>
              <div className="content-nft">
                <h5>Diamond Triange</h5>
                <div className="total d-flex">
                  <div className="price me-4 text-primary">Price: 45 ETH</div>
                  <div>Create: 22/10/2022</div>
                </div>
                <div>Created By :</div>
                <div className="author-img my-2  d-flex">
                  <img className='image-author me-3' src="https://html.dreamitsolution.net/nftpro/assets/images/resource/h3.png" alt='err' />
                  <div className="author">David Main</div>
                </div>
                <div className="place my-4 d-flex">
                  <button className="place-bid">
                    <i className="fa-solid fa-bag-shopping me-2"></i>
                    Place
                  </button>
                  <div className="history d-flex ms-3 mt-1 text-primary">
                    <i className="fa-solid fa-clock-rotate-left m-2"></i>
                    <span className='mt-1'>View History</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="create-form text-white">
              <form onSubmit={handleSubmit} >
                <div className="form-input">
                  <label htmlFor="uploadfile">Upload Image</label>
                  <input type="file" name='image'
                    onChange={(event) => setImage(event.target.files[0])}
                    id="uploadfile" />
                </div>
                <div className="form-input">
                  <label htmlFor="title">Title</label>
                  <input type="text" value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    id="title" placeholder="Enter Title" />
                </div>
                <div className="form-input">
                  <label htmlFor="price">Price</label>
                  <input type="number" id="price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    placeholder="Enter Price" />
                </div>
                <div className="form-input">
                  <label htmlFor="year">Create Date</label>
                  <input type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    id="year" placeholder="dd/mm/yyyy" />
                </div>
                <div className="form-input">
                  <label htmlFor="title">Description</label>
                  <textarea rows="7"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Enter Description" />
                </div>
                <button type='submit' id="button-create">Create NFT <i className="fa-solid fa-arrow-right ms-1"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create