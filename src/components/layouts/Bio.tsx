import { Bookmark, QrCode } from "lucide-react"

const Bio = () => {
  return (
    <>
        <div className="container mx-auto px-4 py-8 bg-white">
            <div className="flex flex-col md:flex-row justify-between sm:space-y-4 items-center mb-4 px-4 py-2">
                    <img src="/Paul.png" alt="bio" className="w-60 h-60 rounded-lg" />
                <div className="flex flex-col space-y-2 text-black justify-center sm:space-y-4">
                    <h2 className="text-3xl font-semibold my-2">Sales Training for B2B clients</h2>
                   <div className="flex items-center space-x-6">
                        <p className="text-gray-400">Opens on Mon - Fri From 9:00 AM - 4:00 PM</p>
                        <p className="text-gray-400">Offered by <span className="mx-2 text-xl font-semibold">Paul</span></p>
                   </div>
                    <p className="my-3">
                    Accessible, fun and inspiring. These are the types of words people use to describe my style of sales training.</p>
                </div>
                <div className="flex space-x-3 items-center mt-6">
                    <QrCode className="w-8 h-8 text-blue-600" />
                    <button type="submit" className="px-4 py-2 btn bg-blue-600 text-white rounded-lg">
                       <Bookmark className="w-5 h-5 text-white mr-2" />
                        Book
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Bio
