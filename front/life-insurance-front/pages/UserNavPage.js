
import '../app/globals.css'
import Link from "next/link";

const UserNavPage = () => {

    return (
        <div>
            <main>
                <div class="bg-gray-100 p-8 rounded-lg shadow-md">
                    <h2 class="text-center text-2xl font-bold text-gray-800 mb-4">Your medical records</h2>
                    <div class="flex justify-center space-x-4">
                        <Link href="/quote">
                            <button class="focus:shadow-outline h-20 w-48 rounded-lg bg-indigo-700 text-xl text-white
                        transition-colors duration-150 hover:bg-indigo-800">
                                Go to questionnaire</button>
                        </Link>
                        <Link href="/Login/loginUnderwriter">
                            <button class="focus:shadow-outline h-20 w-48 rounded-lg bg-purple-700 text-xl text-white
                        transition-colors duration-150 hover:bg-purple-800">
                                Automated fill in</button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default UserNavPage;