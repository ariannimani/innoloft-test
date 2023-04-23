import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductDetails from "../../components/product/product-details/ProductDetails";
import VideoCard from "../../components/video-card/VideoCard";
import ProductUserDetails from "../../components/product/product-user-details/ProductUserDetails";
import ProductCard from "../../components/product/product-card/ProductCard";
import RichText from "../../components/rich-text/RichText";
import parse from "html-react-parser";

const Product = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api-test.innoloft.com/product/6781/").then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const {
    name,
    picture,
    description,
    video,
    company: {
      name: companyName,
      logo: companyLogo,
      address: {
        city: { name: cityName },
        country: { name: countryName },
        house,
        latitude,
        longitude,
        street,
        zipCode,
      },
    },
    user: {
      firstName: userFirstName,
      lastName: userLastName,
      profilePicture: userProfileImage,
    },
    businessModels,
    trl,
    categories,
    investmentEffort,
    type,
  } = data;

  const userFullName = `${userFirstName} ${userLastName}`;
  const address = `${street}, ${cityName} ${zipCode}, ${countryName}`;
  const elements = [];
  return (
    <div>
      <div className="flex justify-between border-solid border-2 border-gray-200 rounded-md w-full bg-white">
        <ProductCard image={picture} title={name}>
          <p className="mt-4">{parse(description)}</p>
          {/*<RichText />*/}
        </ProductCard>
        <ProductUserDetails
          companyName={companyName}
          companyLogo={companyLogo}
          name={userFullName}
          profileImage={userProfileImage}
          address={address}
        />
      </div>
      <VideoCard video={video} />
      <ProductDetails elements={elements} />
    </div>
  );
};

export default Product;
