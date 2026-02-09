import ListingTypes from "@/types/listing"
// import Image from "next/image"
interface AggregatedMarketData {
  market: string;
  listingsArray: [ListingTypes];
}
interface IComponentProps {
  marketData: AggregatedMarketData;
}
  // Create props to be able to reuse this component for different product categories
 const SingleLineList:  React.FunctionComponent<IComponentProps> = ({marketData}) => {
    console.log(marketData)
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Places to stay in {marketData.market}</h2>
            <a className="text-black">See more</a>
          </div>
  
          <div className="mt-6 grid grid-cols-4 grid-rows-1 overflow-hidden gap-x-6 gap-y-10 sm:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 xl:gap-x-8 2xl:">
            {marketData.listingsArray.map((item) => (
              <div key={item._id} className="group relative">
                <img
                // width={500}
                // height={500}
                  alt={item.name}
                  src={item.images.picture_url}
                  className="aspect-square w-full rounded-xl rounded-md bg-black-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-1 flex-4 justify-between">
                  <div>
                    <h3 className="text-sm text-black">
                      <a href={'/listings/' + item._id}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {item.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">item.color</p>
                  </div>
                  {/* <p className="text-sm font-medium text-gray-900">{item.bed_type}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  export default SingleLineList;
  