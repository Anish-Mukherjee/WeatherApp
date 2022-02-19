import React from 'react'

const Header = () => {
    return (
        <div>
            <section className="text-center lg:text-left">
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:items-end lg:justify-between lg:flex">
                    <div className="max-w-xl mx-auto lg:ml-0">
                        

                        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                            Weather Progressive Web Application
                        </h2>
                    </div>

                    <p className="max-w-xs mx-auto mt-4 text-gray-700 lg:mt-0 lg:mr-0">
                        A Progressive Web App is basically a "boosted" web app that can load
                        even without an internet connection
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Header
