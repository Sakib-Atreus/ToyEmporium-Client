import Swal from 'sweetalert2'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const handleAlert=() =>{
    Swal.fire(
      'Sorry!',
      'You Have to Login First!',
      'warning'
    )
  }
  let [categories] = useState({
    ROBOT: [
      {
        id: 1,
        title: 'Stormtrooper',
        price: '999',
        rating: 5,
        img: "https://c4.wallpaperflare.com/wallpaper/154/76/896/buzz-lightyear-star-wars-stormtrooper-lego-star-wars-wallpaper-preview.jpg",
      },
      {
        id: 2,
        title: "Ninja",
        price: '666',
        rating: 3,
        img: "https://c4.wallpaperflare.com/wallpaper/569/347/670/genji-overwatch-genji-shimada-overwatch-genji-wallpaper-preview.jpg",
      },
      {
        id: 3,
        title: "Star Wars",
        price: '333',
        rating: 4,
        img: "https://c4.wallpaperflare.com/wallpaper/424/500/1018/wall%C2%B7e-pixar-animation-studios-star-wars-robot-wallpaper-preview.jpg",
      },
      {
        id: 2,
        title: "Wolf",
        price: '111',
        rating: 3,
        img: "https://c4.wallpaperflare.com/wallpaper/88/234/482/3d-wolf-render-wallpaper-preview.jpg",
      }
    ],
    
    LEGO: [
      {
        id: 1,
        title: 'Lego Mini Figure Set',
        price: '555',
        rating: 5,
        img: "https://c1.wallpaperflare.com/preview/819/695/583/legogubbar-legogummor-lego-map-of-the-world.jpg",
      },
      {
        id: 2,
        title: "Lego War Tank Character Set",
        price: '444',
        rating: 3,
        img: "https://c4.wallpaperflare.com/wallpaper/322/486/382/road-lego-tank-tanks-wallpaper-preview.jpg",
      },
      {
        id: 3,
        title: "Lego Mini Fig Set",
        price: '444',
        rating: 4,
        img: "https://c1.wallpaperflare.com/preview/711/688/1013/lego-knights-tournament-knight-competition.jpg",
      },
      {
        id: 4,
        title: "Lego City Building Toy Set",
        price: '444',
        rating: 3,
        img: "https://c0.wallpaperflare.com/preview/976/313/221/orange-and-multicolored-lego-toy-set.jpg",
      },
   
    ],
    MARVEL: [
      {
        id: 1,
        title: 'Spider Man',
        price: '555',
        rating: 5,
        img: "https://c4.wallpaperflare.com/wallpaper/1000/316/848/spider-man-2018-game-wallpaper-preview.jpg",
      },
      {
        id: 2,
        title: "Iron Man",
        price: '444',
        rating: 3,
        img: "https://c4.wallpaperflare.com/wallpaper/844/815/752/iron-man-marvel-comics-wallpaper-preview.jpg",
      },
      {
        id: 3,
        title: "Captain America",
        price: '333',
        rating: 4,
        img: "https://c4.wallpaperflare.com/wallpaper/713/13/242/movies-marvel-cinematic-universe-marvel-comics-avengers-endgame-captain-america-hd-wallpaper-preview.jpg",
      },
      {
        id: 2,
        title: "Thor",
        price: '222',
        rating: 3,
        img: "https://c4.wallpaperflare.com/wallpaper/921/558/531/the-avengers-avengers-endgame-avengers-endgame-marvel-comics-thor-hd-wallpaper-preview.jpg",
      }
    ],
  })

  return (
    <div>
      <h1 className="text-center m-2 bg-black text-red-400 p-4 font-black text-4xl rounded-full">Tabs Section !</h1>

      <div className="w-full max-w-full px-2 py-16 sm:px-0">

        <Tab.Group>
          <Tab.List className="flex w-full rounded-xl bg-black p-3">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-xl font-black  leading-5 text-black',
                    'ring-white ring-opacity-100 ring-offset-2 ring-offset-pink-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 '
                      : 'text-blue-100 hover:bg-red-300 hover:m-1 hover:text-black text-xl'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-black p-3',
                  'ring-white ring-opacity-100 ring-offset-4 ring-offset-black-400 focus:outline-none focus:ring-2'
                )}
              >
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:w-full'>
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="relative rounded-md p-3"
                    >

                      <div className="card w- bg-gray-900 shadow-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                        <div>
                          <img className='h-full w-full' src={post.img}alt="" />
                        </div>
                        <div className="card-body">
                          <h2 className="card-title text-white text-2xl">Name : {post.title}</h2>
                          <p className="text-white text-xl">Price : {post.price} $</p>
                          <p className='text-white text-xl'>Rating : {post.rating}
                          <span className='rating p-1'><input type="radio" name="rating-3" className="mask mask-heart w-5 bg-red-400" /></span> </p>
                          <p className="badge text-red-400"><span className='text-red-400'>Review </span>+99</p>
                          <div className="card-actions justify-end">
                            <Link  to="/login">
                            <button onClick={handleAlert} className="btn bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 text-black font-bold text-lg">Details</button>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
