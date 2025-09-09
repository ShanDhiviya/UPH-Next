import { Metadata } from 'next';
import styles from './details.module.css';
import ImageCarousel from '../[id]/components/ImageCarousel';
import VideoCarousel from '../[id]/components/VideoCarousel';
import { notFound } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(params.id);
  return {
    title: `${product.title} | Product Details`,
    description: product.description,
  };
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  // Mock data for carousels (in real app, this would come from your API)
  const images = [product.image, product.image, product.image];
  const videos = [
    { url: 'https://example.com/video1.mp4', thumbnail: product.image },
    { url: 'https://example.com/video2.mp4', thumbnail: product.image },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.productContainer}>
        <div className={styles.mediaSection}>
          <ImageCarousel images={images} />
          <VideoCarousel videos={videos} />
        </div>

        <div className={styles.productInfo}>
          <h1 className={styles.title}>{product.title}</h1>
          <span className={styles.category}>{product.category}</span>
          <div className={styles.price}>${product.price}</div>

          <div className={styles.description}>
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <button className={styles.addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
