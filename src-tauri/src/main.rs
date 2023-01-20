fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![hello_world])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn hello_world(name: &str) -> String {
   format!("Hello, {}!", name)
}
