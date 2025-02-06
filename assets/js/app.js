import JSONSchemaForm from "./hooks/json_schema_form";

let Hooks = {};
Hooks.JSONSchemaForm = JSONSchemaForm;

let liveSocket = new LiveSocket("/live", Socket, {
  params: { _csrf_token: csrfToken },
  hooks: Hooks // <- Add this
});