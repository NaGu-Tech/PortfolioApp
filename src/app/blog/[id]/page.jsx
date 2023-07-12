import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat placeat corporis quibusdam eaque sequi distinctio laborum magnam fugiat facilis iure laboriosam assumenda exercitationem possimus, natus dolorum ex, sit provident veritatis.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque tenetur magnam, nulla perferendis perspiciatis sed autem, eveniet esse dolor, iure possimus accusamus. Modi, tempora. Sequi pariatur expedita tempore sunt?
          </p>

          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Chika Agu</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, tenetur non accusamus unde asperiores veritatis? Sunt corrupti consequuntur id laudantium deserunt minima eveniet error, a ea delectus quae inventore reprehenderit?
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque magni velit, cum et aliquam nostrum voluptatem adipisci sed tempora labore molestias illo alias. Provident, laboriosam fugiat? Necessitatibus eum dolorem ratione.
         <br />
         <br />
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum placeat nam aliquid excepturi ad? Praesentium hic ex qui dolorum suscipit consequuntur, odio fuga, dolorem esse placeat autem, eligendi itaque nihil!
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur dolorum consequatur, aliquam recusandae vitae nisi commodi accusantium reprehenderit molestiae, animi libero porro fugit optio quas veniam voluptatibus sint, assumenda expedita.
        </p>
      </div>


    </div>
  );
};

export default BlogPost;