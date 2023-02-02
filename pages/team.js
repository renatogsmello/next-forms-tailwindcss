import { useEffect } from "react"
import ComboBox from "./components/ComboBox"
import ListBox from "./components/ListBox"

export default function Teams() {
	return (
		<>
			<div className="max-w-7xl w-full mx-auto px-2 sm:px-6 lg:px-8">
				<div className="mt-10">
					<h3 className="text-2xl mb-5 font-medium leading-6 text-gray-900">Personal Information</h3>
					<form action="#" method="POST">
						<div className="shadow overflow-hidden sm:rounded-md">
							<div className="px-4 py-5 bg-white sm:p-6">
								{/* <div className="mb-5">
									<label htmlFor="country2" className="block text-sm font-medium text-gray-700">
										Country
										<ComboBox data={""} />
									</label>
								</div> */}
								<div className="mb-5">
									<label htmlFor="country" className="block text-sm font-medium text-gray-700">
										Country
									</label>
									<select
										id="country"
										name="country"
										autoComplete="country-name"
										className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
									>
										<option>United States</option>
										<option>Canada</option>
										<option>Mexico</option>
									</select>
								</div>

								<div className="mb-5">{/* <ListBox labelName="State" /> */}</div>
							</div>
							<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<button
									type="submit"
									className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Save
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

// export async function getStaticProps() {
// 	// Call an external API endpoint to get posts.
// 	// You can use any data fetching library
// 	const res = await fetch("api/bjcp-2021.json")
// 	const posts = await res.json()

// 	// By returning { props: { posts } }, the Blog component
// 	// will receive `posts` as a prop at build time
// 	return {
// 		props: {
// 			posts,
// 		},
// 	}
// }
