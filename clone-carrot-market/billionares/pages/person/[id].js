import Seo from "../../components/Seo";
import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    const id = router.query.id;
    return (
        <div>
            <Seo title="Detail" />
            <p>{id}</p>
        </div>
    );
}