import { getGoogleReviews } from '@/libs/utils';
import axios from 'axios';

const dataId = '0x2e7baf001aa54f83:0x35ff5b7e2b2c0154';

export const dynamic = 'force-dynamic';

export const GET = async (req: Request) => {
  try {
    const { data: html } = await axios.get(`https://www.google.com/async/reviewDialog?hl=id_ID&async=feature_id:${dataId},next_page_token:,sort_by:qualityScore,start_index:,associated_topic:,_fmt:pc`);
    const reviews = getGoogleReviews(html);

    return Response.json({ data: reviews }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      Response.json({ error: error.message }, { status: 500 });
    } else {
      Response.json({ error: 'An error occurred' }, { status: 500 });
    }
  }
};
