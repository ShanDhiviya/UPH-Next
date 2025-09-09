import { Metadata } from 'next';
import styles from './products.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import dogOutline from '../assets/images/dog-outline.png';
import catOutline from '../assets/images/cat-outline.png';
import dogPerson from '../assets/images/dog-person.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'Products | Next.js App',
  description: 'Browse our amazing products',
};

// Define Product type
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Fetch products from the API
async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 } // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  const images = [
    { src: dogOutline, alt: 'Dog Outline' },
    { src: catOutline, alt: 'Cat Outline' },
    { src: dogPerson, alt: 'Dog Person' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p className={styles.category}>{product.category}</p>
              <p className={styles.price}>${product.price}</p>
              <p className={styles.description}>
                {product.description.slice(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Pet Collection</h1>
        <div className="w-full">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            autoplay={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
