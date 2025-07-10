
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Card } from './ui/card';

const BannerCarousel: React.FC = () => {
  const banners = [
    {
      id: 1,
      title: "Fresh Fruits 50% Off",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=300&fit=crop",
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "Electronics Sale",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=300&fit=crop",
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Grocery Essentials",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=300&fit=crop",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="px-4 py-4">
      <Carousel className="w-full">
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <Card className="relative overflow-hidden h-40 cursor-pointer hover:shadow-lg transition-shadow">
                <div 
                  className={`w-full h-full ${banner.color} bg-gradient-to-r from-transparent to-black/20 flex items-center justify-center`}
                  style={{
                    backgroundImage: `url(${banner.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {banner.title}
                  </h3>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
