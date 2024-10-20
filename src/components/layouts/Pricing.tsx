
const Pricing = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="divider text-gray-500 my-2">Pricing</div>
        <div className="flex flex-col space-y-4 md:flex-row lg:flex-row mt-8 md:space-x-6 lg:space-x-6">
            <div className=" bg-gray-100 rounded-lg">
                <div className="card-body">
                        <p className="text-lg text-black ">Mon, Tue, Wed, Thu, Fri</p>
                        <p className="text-sm text-gray-400">11:00 to 17:00</p>
                        <p className="text-2xl text-black ">95.00 €</p>
                        <p className="text-xs text-gray-400">per hour</p>
                </div>
            </div>
            <div className="px-4 py-2px-4 py-2 bg-gray-100   rounded-lg">
                <div className="card-body">
                    <p className="text-lg text-black ">Sat & Sun</p>
                    <p className="text-sm text-gray-400">11:00 to 17:00</p>
                    <p className="text-2xl text-black ">115.00 €</p>
                    <p className="text-xs text-gray-400">per hour</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Pricing
