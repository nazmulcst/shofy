import { notFoundImage } from "@/assets";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <Container className="flex flex-col gap-2 items-center justify-center py-10">
      <Image src={notFoundImage} alt="notFoundImage" className="w-60" />
      <p className="text-2xl font-semibold">Oops! Page not found</p>
      <p className="text-sm text-gray-500 max-w-80 text-center">
        Whoops, this is embarrassing. Looks like the page you were looking for
        wasn't found.
      </p>
      <Button href="/">Back to Home</Button>
    </Container>
  );
};

export default NotFoundPage;
