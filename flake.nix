{
  description = "Bun project development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # Bun runtime and package manager
            bun
            
            # Common development tools
            nodejs
            nodePackages.typescript
            nodePackages.typescript-language-server
            
            # Git and other utilities
            git
            curl
            wget
            
            # Optional: Additional tools you might need
            # deno
            # pnpm
            # yarn
          ];

          shellHook = ''
            echo "🐰 Bun development environment loaded!"
            echo "Available commands:"
            echo "  bun --version"
            echo "  bun install"
            echo "  bun run dev"
            echo "  bun run build"
            echo "  bun run test"
          '';

          # Environment variables
          BUN_INSTALL = "$HOME/.bun";
          PATH = "$BUN_INSTALL/bin:$PATH";
        };

        # Optional: Define packages if you want to build something
        packages = {
          # Example: if you have a buildable package
          # default = pkgs.stdenv.mkDerivation {
          #   pname = "your-project";
          #   version = "0.1.0";
          #   src = ./.;
          #   buildInputs = with pkgs; [ bun ];
          #   buildPhase = "bun run build";
          #   installPhase = "mkdir -p $out && cp -r dist/* $out/";
          # };
        };

        # Optional: Define apps if you have runnable applications
        apps = {
          # Example: if you have a runnable app
          # default = {
          #   type = "app";
          #   program = toString (pkgs.writeShellScript "start" ''
          #     cd ${self}
          #     bun run start
          #   '');
          # };
        };
      }
    );
} 