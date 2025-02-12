import React, { PureComponent } from "react";
// import doors from "./doors.jpg";
// import logo from "./logo.png";
import door_1 from "./door_1.jpg";
import door_2 from "./door_2.jpg";
import door_3 from "./door_3.jpg";
import door_4 from "./door_4.jpg";
import door_5 from "./door_5.jpg";
import door_6 from "./door_6.jpg";
import door_7 from "./door_7.jpg";

const callouts = [
  {
    name: "Soham Doors  ",
    description: "Smart Doors Design",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
  },
  {
    name: "Soham Doors ",
    description: "Front Doors Design",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
  },
  {
    name: "Soham Doors ",
    description: "Double Doors Design",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
  },
  {
    name: "Soham Doors",
    description: "Sliding Door Design",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
  },
  {
    name: "Soham Doors",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
  },
  {
    name: "Soham Doors",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
  },
];
const products = [
  {
    id: 1,
    name: "Sliding Doors",
    href: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Rs.1",
    color: "color",
  },
  {
    id: 2,
    name: "Front Door",
    href: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Rs.1",
    color: "color",
  },
  {
    id: 3,
    name: "Smart Door",
    href: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Rs.1",
    color: "color",
  },
  {
    id: 4,
    name: "Exterior Double Door",
    href: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Rs.1",
    color: "color",
  },
];
export class Landing extends PureComponent {
  render() {
    return (
      <>
        <section>
          <div class="flex justify-center   p-8 ">
            <div class="flex flex-col justify-center">
              <div class="flex flex-col lg:flex-row max-w-5xl justify-center items-center p-2 space-y-3 w-[100%]">
                <div class="flex flex-col  items-center lg:text-left text-center justify-between  space-y-6 px-8">
                  <div class="flex flex-col items-start space-y-3">
                    <div class="text-3xl md:text-5xl font-bold px-8">
                      Be an opener of doors with,{" "}
                    </div>
                    <div class="text-3xl text-orange-500 md:text-5xl font-bold px-8">
                      Soham Doors{" "}
                    </div>
                    <div class="h-1 rounded-2xl w-20 bg-orange-500 ml-10"></div>
                  </div>
                  <button class="">
                    <ion-icon
                      name="caret-forward-outline"
                      class="mt-2 p-2 bg-orange-500 rounded-full text-3xl text-white border-2 border-orange-500 hover:bg-white hover:text-orange-500"
                    ></ion-icon>
                  </button>
                </div>
                <div class="flex space-x-2 md:space-x-6 md:m-4 w-1/2">
                  <div class=" w-96 h-60 lg:h-96  overflow-hidden ">
                    <img
                      src={door_1}
                      class="h-full w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="https://cdn.tailwindcss.com"></script>
          <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
        </section>
        <section>
          <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                <h2 className="text-2xl font-bold text-gray-900">Designs</h2>

                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                  {callouts.map((callout) => (
                    <div key={callout.name} className="group relative">
                      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                        <img
                          src={door_7}
                          alt={callout.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <h3 className="mt-6 text-sm text-gray-500">
                        <a href={door_2}>
                          <span className="absolute inset-0" />
                          {callout.name}
                        </a>
                      </h3>
                      <p className="text-base font-semibold text-gray-900">
                        {callout.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Top Seller Doors
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <img
                        src={door_3}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Wood Species
              </h1>
              {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="Door Species"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src={door_4}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      Wood Specie
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Bamboo
                    </h1>
                    {/* <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="Door Species"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src={door_5}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      Wood Specie
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Pine
                    </h1>
                    {/* <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="Door Species"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src={door_6}
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      Wood Specie
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Oak
                    </h1>
                    {/* <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="Door Species"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      Wood Specie
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Wood Grain
                    </h1>
                    {/* <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="Door Species"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      Wood Specie
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Lauan
                    </h1>
                    {/* <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <img
                    alt="Door Species"
                    class="absolute inset-0 w-full h-full object-cover object-center"
                    src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                  />
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80">
                    <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      Wood Specie
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Indian Rose Wood
                    </h1>
                    {/* <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Why Soham Doors
                </h1>
                {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
              </div>
              <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg> */}
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      200
                    </h2>
                    <p class="leading-relaxed">Large Community</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg> */}
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      1.3K
                    </h2>
                    <p class="leading-relaxed">Customers</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg> */}
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      1000
                    </h2>
                    <p class="leading-relaxed">Doors Sell</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg> */}
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      5
                    </h2>
                    <p class="leading-relaxed">Franchise</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Subscribe To Our Newsletter
              </h1>
            </div>
            <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div class="relative flex-grow w-full">
                <label for="full-name" class="leading-7 text-sm text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative flex-grow w-full">
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Landing;
