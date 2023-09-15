import { CarProps, FilterProps } from "@/types/interfaces";

export const fetchCarsApi = async (filter:FilterProps) => {
  const headers = {
    "X-RapidAPI-Key": "154be63793msh30b576512b2edafp1fb5eejsn3495663f2da7",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
   
  const {manifacture, year, model, fuel, limit} = filter
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manifacture}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
};


export const genereteCarsUrl = (cars:CarProps, angle?:string) => {

  const url = new URL('https://cdn.imagin.studio/getimage')

  const {make, year, model} = cars

  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

 
  return `${url}`

}


export const updateSerchParams = (type:string, value:string) => {
  const searchParams = new URLSearchParams(window.location.search)
   searchParams.set(type, value)
   const newPathName = `${
    window.location.pathname
  }?${searchParams.toString()}`;
 return newPathName
}