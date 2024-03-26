
import '../../app/globals.css'
import Link from "next/link";

const UserType = () => {

    return (
        <div className="flex justify-center">
            <main>
                <div class=" p-8 rounded-lg shadow-md max-w-50 glass-box">
                    <h2 class="text-center text-2xl font-bold text-gray-800 mb-4">Select Your Login Type</h2>
                    <div class="flex justify-center space-x-4">
                        <Link href="/Login/loginClient">
                        <button class="focus:shadow-outline h-20 w-48 rounded-lg bg-indigo-700 text-xl text-white
                        transition-colors duration-150 hover:bg-indigo-800">
                            Client</button>
                        </Link>
                        <Link href="/Login/loginUnderwriter">
                        <button class="focus:shadow-outline h-20 w-48 rounded-lg bg-purple-700 text-xl text-white
                        transition-colors duration-150 hover:bg-purple-800">
                            Underwriter</button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default UserType;