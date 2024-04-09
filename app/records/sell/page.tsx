import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

import { Heading1 } from "@/components/typography";

export default withPageAuthRequired(
  async function SellRecords() {
    const session = await getSession();

    return <Heading1>Sell Records, {session?.user.name}</Heading1>;
  },
  { returnTo: "/records/sell" }
);
