import { FC, useEffect } from "react";
import type { GetServerSideProps } from "next";
// import { withIronSession } from "next-iron-session";
import { serverData } from "service/Service";
import { useUser } from "hooks/use-user";
import { metaConfig } from "config/metaConfig";
import LayoutWrapper from "middleware/components/Layout/LayoutWrapper";
import { jsonParse } from "util/helper";
// import { prepareWithBody, prepareSectionList } from "util/prepareLayoutData";
import _ from "lodash";
import { useCloud } from "hooks/use-cloud";

type PropsType = {
  userSession: object;
  readyMergedLayoutConfig: any;
  meta_bp_layout_section: any;
  mergedLayout: any;
  generalConfig: any;
  ourMetaConstant: any;
};

const Home: FC<PropsType> = ({
  userSession,
  readyMergedLayoutConfig,
  meta_bp_layout_section,
  mergedLayout,
  generalConfig,
  ourMetaConstant,
}) => {
  const userContext = useUser();
  const cloudContext = useCloud();

  useEffect(() => {
    userContext.setUData(userSession);
    cloudContext.setGlobalConfig(generalConfig);
    cloudContext.setMetaConstant({
      meta: metaConfig,
      ourMetaConstant: ourMetaConstant,
    });
  }, []);

  const { bodyDefault } = cloudContext.globalConfig;

  // console.log("DDDDDD", cloudContext.metaConstant);

  // console.log("🚀 ~ bodyDefault", bodyDefault);
  // console.log("🚀 ~ readyMergedLayoutConfig", readyMergedLayoutConfig);
  // console.log("🚀 ~ mergedLayout", mergedLayout);

  return (
    <div
      className={`${
        bodyDefault?.className
          ? bodyDefault?.className
          : "bg-gray-50 min-h-screen min-w-screen"
      }`}
      style={{ ...bodyDefault?.style }}
    >
      <LayoutWrapper
        readyMergedLayoutConfig={readyMergedLayoutConfig}
        meta_bp_layout_section={meta_bp_layout_section}
        mergedLayout={mergedLayout}
      />
    </div>
  );
};

/*
async function handler(context: any) {
  const userSession = context.req.session.get("usersession") || null;
  const devcloudlayoutid = context.query.devcloudlayoutid || null;
  const ourMetaConstant = metaConfig.metaDevCloud;

  if (!userSession) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const pageLayoutConfig =
    (
      await serverData(
        ourMetaConstant.serverUrl,
        metaConfig.COMMAND_LAYOUT,
        {
          filtermetadataid: devcloudlayoutid,
        },
        ourMetaConstant
      )
    )?.result || [];

  const [mergedLayoutConfig, mergedLayout = []] = await prepareWithBody(
    pageLayoutConfig,
    ourMetaConstant
  );

  const readyMergedLayoutConfig = await prepareSectionList(
    mergedLayoutConfig,
    ourMetaConstant
  );

  //Нэг Widget буюу адилхан байвал дахин нэмэх хэрэггүй.
  let meta_bp_layout_section: any = [
    ...readyMergedLayoutConfig.meta_bp_layout_section,
  ];
  const eded = _.values(pageLayoutConfig.meta_bp_layout_section);
  if (readyMergedLayoutConfig.meta_bp_layout_section[0]?.id !== eded[0]?.id) {
    meta_bp_layout_section = [...meta_bp_layout_section, ...eded];
  }

  const readyMergedLayoutNemgoo = jsonParse(
    readyMergedLayoutConfig.layoutnemgoo
  );
  const generalConfig = readyMergedLayoutNemgoo?.config || {};

  return {
    props: {
      userSession,
      mergedLayout,
      readyMergedLayoutConfig,
      meta_bp_layout_section: meta_bp_layout_section,
      generalConfig,
      ourMetaConstant,
    },
  };
}

export const getServerSideProps: GetServerSideProps = withIronSession(handler, {
  password: "e*)xK2H*TEwry9j-Wt~??scn^!iK.VR^w?~yH:fZPJ3",
  cookieName: "vrwebapp_cookie",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    // secure: process.env.NODE_ENV === "production",
    secure: false,
  },
});

*/

export default Home;
