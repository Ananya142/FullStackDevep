import './App.css'

function App() {
  return (
    <>
      <h1 className="title">Our Menu</h1>
      <div className="pizza-container">
        <Pizza
          name="Classic"
          ingredient="Onion, Tomato, Capsicum"
          size="Regular"
          price={150}
          image="https://alexandraspizzas.weebly.com/uploads/4/3/7/1/43711159/s884612586759093835_p2_i1_w1280.jpeg"
          />
        <Pizza
          name="Margherita"
          ingredient="Cheese"
          size="Medium"
          price={300}
          image="https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https://storage.googleapis.com/gen-atmedia/3/2012/07/f2203c0e403286947dcf80815b656236fec71e88.jpeg"
        />
        <Pizza
          name="Farmhouse"
          ingredient="Onion, Paneer, Capsicum, Jalapeno"
          size="Medium"
          price={300}
          image="https://images7.alphacoders.com/350/350913.jpg"
        />
        <Pizza
          name="Veggie Delight"
          ingredient="Corn, Capsicum, Jalapeno"
          size="Large"
          price={350}
          image="https://th.bing.com/th/id/OIP.Bjqz-deEMIcCIMflCPjGQQHaEo?w=355&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        />
        <Pizza
          name="Pepperoni"
          ingredient="Pepperoni, Cheese"
          size="Medium"
          price={400}
          image="https://thumbs.dreamstime.com/b/pizza-delicious-cheesy-classic-italian-food-concept-copy-space-assorted-pizzas-isolated-variety-freshly-made-fresh-342235007.jpg"
          />
        <Pizza
          name="Spicy Paneer"
          ingredient="Paneer, Jalapeno, Onion"
          size="Large"
          price={380}
          image="https://i.pinimg.com/originals/1e/33/61/1e336162c6172fdb30da0449f1bfd71d.jpg"
        />
      </div>
    </>
  )
}

function Pizza(props) {
  return (
    <div className="pizza-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredient}</p>
      <p>Size: {props.size}</p>
      <p>Price: ₹{props.price}</p>
    </div>
  )
}

export default App
