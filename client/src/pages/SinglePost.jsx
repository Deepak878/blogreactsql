import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../components/Menu'
const SinglePost = () => {
  return (
    <div className='single'>
      <div className="content">
        <img/>
        <div className="user">
          <img/>
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
            <img src='/images/edit.png'/>
            </Link>
            <img src='/images/delete.png'/>
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quod dicta excepturi doloremque quas minima minus, accusantium ad odit blanditiis modi quae enim expedita, vel voluptatibus placeat porro dolor quis!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis fugiat quae numquam in, accusamus cumque! Ea perspiciatis dolorum, id impedit deserunt doloribus. <br/>
          Illo unde ad dolorum optio explicabo asperiores totam, nemo commodi a cumque sint rem dignissimos ipsa neque ullam! Quia facere recusandae doloremque sint id fugit quidem veniam voluptate magni, modi laborum aperiam asperiores dignissimos rerum.<br/>
           Aliquid quod architecto nostrum modi at ipsa. Ut minus illum animi aspernatur voluptatibus ducimus consequuntur nesciunt, perferendis earum aliquam ipsa ratione tempore quia cupiditate molestias accusantium quidem atque accusamus corporis dolorem inventore illo vitae culpa. Nisi, accusantium quae! Error, porro? Architecto mollitia beatae veniam neque, dolore, perspiciatis optio aut possimus dicta dolorum laborum perferendis sunt, fugiat iure dignissimos at consequatur quia ad.<br/>
            Aliquid odio ducimus porro dignissimos in nihil, sapiente illum quis libero soluta commodi cupiditate incidunt quibusdam odit debitis quia! Fuga debitis fugiat dolore incidunt, voluptate id illum eius ipsam. Ex repellendus tempora sit nisi dolores? Atque culpa, est nisi quis ad doloremque.<br/> Sint et, aliquid ducimus quis quaerat tenetur voluptas ab quas eum pariatur magni nesciunt, minus voluptates repellat veritatis perspiciatis labore. Repellat odit at tenetur hic aspernatur odio quidem illum, aliquid perferendis nemo, ad nisi explicabo reiciendis veniam alias unde!</p>
      </div>
     <Menu/>
    </div>
  )
}

export default SinglePost
