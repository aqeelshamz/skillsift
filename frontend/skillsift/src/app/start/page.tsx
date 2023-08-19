export default function Page() {
    return <div className="flex w-screen h-screen flex-col items-center text-black p-5">
        <input type="file" />
        <div>OR</div>
        <div className="form-control w-full max-w-[50vh]">

            <label className="label mt-4">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" />
            <label className="label mt-4">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" />
            <label className="label mt-4">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" />
            <label className="label mt-4">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="Email" className="input input-bordered w-full" />
        </div>
    </div>
}