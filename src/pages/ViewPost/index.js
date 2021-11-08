import {
  Container,
  Typography,
  Box,
  Grid,
  LinearProgress,
  Divider,
  List,
  Paper,
  TextField,
  CardMedia,
} from "@mui/material";
import React from "react";
import CardInvestDetail from "../../components/CardInvestDetail";

export default function ViewPost() {
  const investor = {
    avatar:
      "https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg",
    name: "Ha Nguyen",
    money: "200.000",
    object: {
      issuer: "https://iam-dev.acb.com.vn/auth/realms/soba",
      authorization_endpoint:
        "https://iam-dev.acb.com.vn/auth/realms/soba/protocol/openid-connect/auth",
      token_endpoint:
        "https://iam-dev.acb.com.vn/auth/realms/soba/protocol/openid-connect/token",
      token_introspection_endpoint:
        "https://iam-dev.acb.com.vn/auth/realms/soba/protocol/openid-connect/token/introspect",
      userinfo_endpoint:
        "https://iam-dev.acb.com.vn/auth/realms/soba/protocol/openid-connect/userinfo",
      end_session_endpoint:
        "https://iam-dev.acb.com.vn/auth/realms/soba/protocol/openid-connect/logout",
      jwks_uri:
        "https://iam-dev.acb.com.vn/auth/realms/soba/protocol/openid-connect/certs",
      check_session_iframe:
        "https://iam-dev.acb.com.vn/auth/realms/soba/protocol/openid-connect/login-status-iframe.html",
      grant_types_supported: [
        "authorization_code",
        "implicit",
        "refresh_token",
        "password",
        "client_credentials",
      ],
      response_types_supported: [
        "code",
        "none",
        "id_token",
        "token",
        "id_token token",
        "code id_token",
        "code token",
        "code id_token token",
      ],
      subject_types_supported: ["public", "pairwise"],
      id_token_signing_alg_values_supported: [
        "PS384",
        "ES384",
        "RS384",
        "HS256",
        "HS512",
        "ES256",
        "RS256",
        "HS384",
        "ES512",
        "PS256",
        "PS512",
        "RS512",
      ],
      id_token_encryption_alg_values_supported: ["RSA-OAEP", "RSA1_5"],
      id_token_encryption_enc_values_supported: ["A128GCM", "A128CBC-HS256"],
      userinfo_signing_alg_values_supported: [
        "PS384",
        "ES384",
        "RS384",
        "HS256",
        "HS512",
        "ES256",
        "RS256",
        "HS384",
        "ES512",
        "PS256",
        "PS512",
        "RS512",
        "none",
      ],
      request_object_signing_alg_values_supported: [
        "PS384",
        "ES384",
        "RS384",
        "HS256",
        "HS512",
        "ES256",
        "RS256",
        "HS384",
        "ES512",
        "PS256",
        "PS512",
        "RS512",
        "none",
      ],
      response_modes_supported: ["query", "fragment", "form_post"],
      registration_endpoint:
        "https://iam-dev.acb.com.vn/auth/realms/soba/clients-registrations/openid-connect",
      token_endpoint_auth_methods_supported: [
        "private_key_jwt",
        "client_secret_basic",
        "client_secret_post",
        "tls_client_auth",
        "client_secret_jwt",
      ],
      token_endpoint_auth_signing_alg_values_supported: [
        "PS384",
        "ES384",
        "RS384",
        "HS256",
        "HS512",
        "ES256",
        "RS256",
        "HS384",
        "ES512",
        "PS256",
        "PS512",
        "RS512",
      ],
      claims_supported: [
        "aud",
        "sub",
        "iss",
        "auth_time",
        "name",
        "given_name",
        "family_name",
        "preferred_username",
        "email",
        "acr",
      ],
      claim_types_supported: ["normal"],
      claims_parameter_supported: false,
      scopes_supported: [
        "openid",
        "address",
        "client-redirect-identifier",
        "email",
        "microprofile-jwt",
        "offline_access",
        "phone",
        "profile",
        "roles",
        "service:ewallet",
        "service:payment-collection",
        "soba-api",
        "web-origins",
      ],
      request_parameter_supported: true,
      request_uri_parameter_supported: true,
      code_challenge_methods_supported: ["plain", "S256"],
      tls_client_certificate_bound_access_tokens: true,
      introspection_endpoint:
        "https://iam-dev.acb.com.vn/auth/realms/soba/protocol/openid-connect/token/introspect",
    },
  };

  return (
    <div>
      <Box component="div" sx={{ padding: "1rem 0rem" }}>
        <Typography variant="h5" align="center">
          Your loan post
        </Typography>
        <Typography variant="h6" align="center">
          Watch how many people are supporting you
        </Typography>
      </Box>
      <Container sx={{ padding: "3rem 3rem" }} maxWidth="xl">
        <Grid container spacing="15">
          <Grid item xs="12" md="8">
            <video width="100%" height="" controls>
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
            </video>
          </Grid>
          <Grid item xs="12" md="4">
            <Grid container spacing="5">
              <Grid item xs="12" md="12">
                <LinearProgress
                  variant="determinate"
                  value={50}
                  sx={{ height: "12px" }}
                />
              </Grid>
              <Grid item xs="12" md="12" sx={{ marginTop: "1rem" }}>
                <Typography variant="h5">100.000 VND</Typography>
                <Typography variant="h6">goal</Typography>
              </Grid>
              <Grid item xs="6" md="12" sx={{ marginTop: "1rem" }}>
                <Typography variant="h5">0</Typography>
                <Typography variant="h6">backers</Typography>
              </Grid>
              <Grid item xs="6" md="12" sx={{ marginTop: "1rem" }}>
                <Typography variant="h5">60 days</Typography>
                <Typography variant="h6">before expired</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ margin: "20px 0px" }} />

        <Grid container spacing="15">
          <Grid item xs="12" md="7">
            <Typography variant="h5">Description</Typography>
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              A paragraph is a series of related sentences developing a central
              idea, called the topic. Try to think about paragraphs in terms of
              thematic unity: a paragraph is a sentence or a group of sentences
              that supports one central, unified idea. Paragraphs add one idea
              at a time to your broader argument.Topic sentences are similar to
              mini thesis statements. Like a thesis statement, a topic sentence
              has a specific main point. Whereas the thesis is the main point of
              the essay, the topic sentence is the main point of the paragraph.
            </Typography>
          </Grid>
          <Grid item xs="12" md="5">
            <Typography variant="h5">Investments</Typography>
            <Paper elevation={0} style={{ maxHeight: 500, overflow: "auto" }}>
              <List>
                <CardInvestDetail investor={investor} />
                <CardInvestDetail investor={investor} />
                <CardInvestDetail investor={investor} />
                <CardInvestDetail investor={investor} />
                <CardInvestDetail investor={investor} />
                <CardInvestDetail investor={investor} />
                <CardInvestDetail investor={investor} />
                {/* <Typography variant="h6" align="center" sx={{fontSize:"15px" }} color="#b23c17">More</Typography> */}
              </List>
            </Paper>
          </Grid>
        </Grid>
        <Divider sx={{ margin: "20px 0px" }} />

        <Typography variant="h5">Demand Note</Typography>
        <Grid container spacing="15">
          <Grid item xs="12" md="6">
            <CardMedia
              sx={{ marginTop: 2 }}
              height="400"
              component="img"
              image="https://cdn-img.thethao247.vn/upload/kienlv/2020/09/11/tuyen-thu-dt-viet-nam-cong-khai-ban-gai-xinh-nhu-mong1599795990.png"
            />
          </Grid>
          <Grid item xs="12" md="6">
            <CardMedia
              sx={{ marginTop: 2 }}
              height="400"
              component="img"
              image="https://cdn-img.thethao247.vn/upload/kienlv/2020/09/11/tuyen-thu-dt-viet-nam-cong-khai-ban-gai-xinh-nhu-mong1599795990.png"
            />
          </Grid>
        </Grid>

        <Divider sx={{ margin: "20px 0px" }} />

        <Typography variant="h5">Archivements</Typography>
        <Grid container spacing="15">
          <Grid item xs="12" md="6">
            <TextField
              align="right"
              label="Title"
              variant="outlined"
              defaultValue="hinh 1"
              InputProps={{
                readOnly: true,
              }}
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <CardMedia
              sx={{ marginTop: 2 }}
              height="400"
              component="img"
              image="https://cdn-img.thethao247.vn/upload/kienlv/2020/09/11/tuyen-thu-dt-viet-nam-cong-khai-ban-gai-xinh-nhu-mong1599795990.png"
            />
          </Grid>
          <Grid item xs="12" md="6">
            <TextField
              align="right"
              label="Title"
              defaultValue="hinh 2"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
              fullWidth
              sx={{ marginTop: 2 }}
            />
            <CardMedia
              sx={{ marginTop: 2 }}
              height="400"
              component="img"
              image="https://cdn-img.thethao247.vn/upload/kienlv/2020/09/11/tuyen-thu-dt-viet-nam-cong-khai-ban-gai-xinh-nhu-mong1599795990.png"
            />
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ margin: "20px 0px" }} />
    </div>
  );
}
