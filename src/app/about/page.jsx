import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgTextDescription}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Are</h1>
          <p className={styles.decription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet minus modi fugit perferendis veniam officiis vitae. Iste, consequuntur? Sit optio ipsam consequuntur voluptatibus non doloribus ad iusto? Sunt, dicta similique?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium unde ipsa tenetur, necessitatibus fugit odit nihil laudantium dolores minima vero nam debitis vel. Vel deserunt omnis beatae impedit recusandae.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora autem omnis impedit molestias placeat eligendi dignissimos sapiente atque modi, repudiandae dolore vero iste voluptatibus dicta aspernatur enim deserunt praesentium commodi!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.decription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur voluptatibus mollitia eveniet ex cum quaerat doloribus temporibus sapiente magni praesentium perferendis quae officiis dolore aut atque, blanditiis exercitationem consectetur.
            <br />
            <br />
            - Creative Illustration
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>

      </div>
    </div>
  );
};

export default About;